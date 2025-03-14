import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [MatToolbarModule, FontAwesomeModule, MatIconModule],
})
export class FooterComponent {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faFacebook,
      faInstagram,
      faLinkedin,
      faYoutube,
      faWhatsapp
    );
  }
}
