import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly whatsappNumber = '919959651194';
  readonly currentYear = new Date().getFullYear();
  submitted = false;

  enquiry = {
    name: '',
    phone: '',
    service: '',
    location: '',
    details: ''
  };

  sendEnquiry(): void {
    this.submitted = true;
    const message = [
      'Hello New Strategies Consultant! I would like to discuss a project.',
      '',
      `Name: ${this.enquiry.name.trim()}`,
      `Phone: +91 ${this.enquiry.phone.trim()}`,
      `Service: ${this.enquiry.service}`,
      `Project location: ${this.enquiry.location.trim() || 'Not provided'}`,
      `Project details: ${this.enquiry.details.trim()}`
    ].join('\n');

    const whatsappUrl = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  }
}
