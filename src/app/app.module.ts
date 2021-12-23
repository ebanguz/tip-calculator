import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { DisplayResultsComponent } from './components/display-results/display-results.component';

// Directives
import { NumberOnlyDirective } from './directives/number-only.directive';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CalculatorComponent,
    DisplayResultsComponent,
    NumberOnlyDirective,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: environment.production,
  // Register the ServiceWorker as soon as the app is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
