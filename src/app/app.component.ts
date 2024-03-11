import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ExperienceComponent } from '../experience/experience.component';
import { EducationComponent } from '../education/education.component';
import { StackComponent } from '../stack/stack.component';
import { ProjectComponent } from '../project/project.component';
import { ContactComponent } from '../contact/contact.component';
import { LanguageComponent } from '../language/language.component';
import { CertificateComponent } from '../certificate/certificate.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent, AboutComponent,
            ExperienceComponent, EducationComponent, StackComponent, ProjectComponent,
            ContactComponent, LanguageComponent, CertificateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyPortfolioUI';
}
