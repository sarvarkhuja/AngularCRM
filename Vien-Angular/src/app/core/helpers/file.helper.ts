/**
 *
 */
const BASE64_MARKER = ';base64,';

/**
 *
 */
export function convertDataURIToBinary(dataURI): Uint8Array {
  const base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
  const base64 = dataURI.substring(base64Index);
  const raw = window.atob(base64);
  const rawLength = raw.length;
  const array = new Uint8Array(new ArrayBuffer(rawLength));

  for (let i = 0; i < rawLength; i++) {
    array[i] = raw.charCodeAt(i);
  }
  return array;
}

/**
 *
 */
export function dataURLtoFile(dataurl, filename): File {
  const arr = dataurl.split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
}

/**
 *
 */
export class FileHelper {

  /**
   *
   */
  static readUrl(event: any, type: 'single' | 'multiple'): any {
    const fileToUpload: { file: any; result: any } = { file: null, result: null };

    if (event.target.files && event.target.files[0]) {
      if (type === 'single') {
        const reader = new FileReader();
        fileToUpload.file = event.target.files[0];
        reader.onload = (e: any) => {
          fileToUpload.result = e.target.result;
        };
        reader.readAsDataURL(event.target.files[0]);
      }
    }

    return fileToUpload;
  }

  /**
   *
   */
  static fileNameWithoutPath(path: string): string {
    const parts = path.split('/');
    return parts[parts.length - 1];
  }

  /**
   *
   */
  static fileToDataUrl(file: File): File {
    let returning: any;
    const reader = new FileReader();
    reader.onload = (e: any) => {
      returning = e.target.result;
    };
    reader.readAsDataURL(file);
    return returning;
  }
}
