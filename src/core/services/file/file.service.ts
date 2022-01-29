import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResponseModel } from '../../models/base/response.model';
import { UrlHelper } from '../../helpers/url.helper';
import { UrlSettings } from '../../configs/url.setting';

/**
 *
 */
@Injectable({
  providedIn: 'root'
})
export class FileService {

  /**
   *
   */
  constructor(private http: HttpClient) { }

  /**
   *
   */
  uploadFile(file: any, folder: string, type: 'single' | 'multiple'): Observable<string> {
    if (!file) {
      return of(null);
    }

    if (file && typeof file === 'object') {
      const form = new FormData();
      form.append('field', folder);
      if (type === 'single') {
        form.append('files', file[0]);
      }
      if (type === 'multiple') {
        file.forEach(element => {
          form.append('files', element);
        });
      }
      return this.http
        .post<any>(`${UrlHelper.settings.faylUrl}users`, form)
        .pipe(map(s => s.url));
    }
    return file;
  }

  /**
   *
   */
  deleteFile(filePath, allPath): Observable<any> {
    if (!filePath) { return of(null); }
    return this.http
      .post<any>(`${UrlHelper.settings.apiUrl}${UrlSettings.FILE_API}Files/Remove`, { deleteFile: filePath, files: allPath })
      .pipe(map(s => s.result.path));
  }

  /**
   *
   */
  downloadFile(fileUrl: string): Observable<Blob> {
    return this.http.get<Blob>(fileUrl, { responseType: 'blob' as 'json' });
  }
}
