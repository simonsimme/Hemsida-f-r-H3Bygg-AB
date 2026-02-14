import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface ContactFormData {
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-kontakt',
  imports: [FormsModule, CommonModule],
  templateUrl: './kontakt.html',
  styleUrl: './kontakt.css',
})
export class Kontakt {
  formData: ContactFormData = {
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  submitStatus: 'idle' | 'success' | 'error' = 'idle';

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.isSubmitting = true;
      this.submitStatus = 'idle';

      // Skapa mailto-länk med formulärdata
      const recipient = 'johan@h3bygg.se';
      const subject = encodeURIComponent(this.formData.subject);
      const body = encodeURIComponent(
        `Från: ${this.formData.email}\n\n${this.formData.message}`
      );
      
      const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;

      try {
        // Öppna e-postklienten
        window.location.href = mailtoLink;
        
        // Visa success-meddelande
        this.submitStatus = 'success';
        
        // Återställ formuläret efter 2 sekunder
        setTimeout(() => {
          form.resetForm();
          this.formData = {
            email: '',
            subject: '',
            message: ''
          };
          this.submitStatus = 'idle';
        }, 2000);
      } catch (error) {
        console.error('Ett fel uppstod:', error);
        this.submitStatus = 'error';
      } finally {
        this.isSubmitting = false;
      }
    }
  }
}
