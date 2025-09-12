// src/declarations.d.ts
import { CloudinaryUploadWidget } from "@cloudinary/upload-widget";

declare global {
  interface Window {
    cloudinary: {
      createUploadWidget: (
        options: {
          cloudName: string;
          uploadPreset: string;
          [key: string]: any;
        },
        callback: (error: Error | null, result: any) => void
      ) => CloudinaryUploadWidget;
    };
  }
}
