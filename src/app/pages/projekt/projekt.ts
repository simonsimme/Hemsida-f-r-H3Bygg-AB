import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projekt',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projekt.html',
  styleUrls: ['./projekt.css'],
})
export class Projekt {
  // Use explicit filenames for folders where files don't follow 1..n naming.
  projects = [
    {
      folder: 'altan',
      title: 'Altaner',
      description: 'Utomhus rum, altan och trädgård.',
      // exact filenames found in src/assets/images/altan
      images: [ '450.jpg', '451.jpg', '452.jpg', '453.jpg', '454.jpg', '455.jpg', '456.jpg', '457.jpg', '458.jpg', '459.jpg'],
    },
    { folder: 'utehus', title: 'Utehus', description: 'Utehus och förråd.', images: ["446.jpg", "447.jpg", "448.jpg"] },
    { folder: 'växthus', title: 'Växthus', description: 'Växthus för odling av växter.', images: ["440.jpg", "441.jpg", "442.jpg", "443.jpg", "444.jpg", "445.jpg"] },
  ];

  getImages(p: { folder: string; imageCount?: number; images?: string[] }): string[] {
    const ext = '.jpg';
    const normalized = p.folder.replace(/^\/?assets\/images\/|^\//, '').replace(/\/$/, '');

    if (p.images && p.images.length) {
      return p.images.map(name => `assets/images/${normalized}/${name}`);
    }

    const count = p.imageCount ?? 0;
    return Array.from({ length: count }, (_, i) => `assets/images/${normalized}/${i + 1}${ext}`);
  }

  onImgError(e: Event) {
    const img = e.target as HTMLImageElement;
    if (!img) return;
    img.onerror = null;
    img.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400"><rect width="100%" height="100%" fill="%23f3f3f3"/><text x="50%" y="50%" font-family="Arial" font-size="20" fill="%23888" text-anchor="middle" dominant-baseline="middle">Bild saknas</text></svg>';
  }
}