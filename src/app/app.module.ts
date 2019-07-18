import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './componentes/nav/nav.component';
import { LoginContainerComponent } from './componentes/login/login-container/login-container.component';
import { LoginLazyComponent } from './componentes/login/login-lazy/login-lazy.component';
import { RegistroContainerComponent } from './componentes/registro/registro-container/registro-container.component';
import { RegistroLazyComponent } from './componentes/registro/registro-lazy/registro-lazy.component';

//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage'
import { environment } from 'src/environments/environment';
//file drop
import { NgxFileDropModule } from 'ngx-file-drop';
import { AltaTurnoLazyComponent } from './componentes/alta-turno/alta-turno-lazy/alta-turno-lazy.component';
import { AltaTurnoContainerComponent } from './componentes/alta-turno/alta-turno-container/alta-turno-container.component';
import { ListadoTurnosLazyComponent } from './componentes/listado-turnos/listado-turnos-lazy/listado-turnos-lazy.component';
import { ListadoTurnosContainerComponent } from './componentes/listado-turnos/listado-turnos-container/listado-turnos-container.component';
import { ListadoEspecialistaLazyComponent } from './componentes/listado-especialista/listado-especialista-lazy/listado-especialista-lazy.component';
import { ListadoEspecialistaContainerComponent } from './componentes/listado-especialista/listado-especialista-container/listado-especialista-container.component';
import { ModalComponent } from './componentes/modal/modal.component';
import { ModalAusenteComponent } from './componentes/modal-ausente/modal-ausente.component';
import { DiagnosticoLazyComponent } from './componentes/diagnostico/diagnostico-lazy/diagnostico-lazy.component';
import { DiagnosticoMostrarLazyComponent } from './componentes/diagnostico/diagnostico-mostrar-lazy/diagnostico-mostrar-lazy.component';
import { DiagnosticoContainerComponent } from './componentes/diagnostico/diagnostico-container/diagnostico-container.component';
import { EncuestaLazyComponent } from './componentes/encuesta/encuesta-lazy/encuesta-lazy.component';
import { EncuestaContainerComponent } from './componentes/encuesta/encuesta-container/encuesta-container.component';
import { EncuestaMostrarLazyComponent } from './componentes/encuesta/encuesta-mostrar-lazy/encuesta-mostrar-lazy.component';
import { HomeComponent } from './componentes/home/home.component';
import { AuthService } from './servicios/auth/auth.service';
import { FirebaseService } from './servicios/firebase/firebase.service';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginContainerComponent,
    LoginLazyComponent,
    RegistroContainerComponent,
    RegistroLazyComponent,
    AltaTurnoLazyComponent,
    AltaTurnoContainerComponent,
    ListadoTurnosLazyComponent,
    ListadoTurnosContainerComponent,
    ListadoEspecialistaLazyComponent,
    ListadoEspecialistaContainerComponent,
    ModalComponent,
    ModalAusenteComponent,
    DiagnosticoLazyComponent,
    DiagnosticoMostrarLazyComponent,
    DiagnosticoContainerComponent,
    EncuestaLazyComponent,
    EncuestaContainerComponent,
    EncuestaMostrarLazyComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    
    //forms
    FormsModule,
    ReactiveFormsModule,

    //file drop
    NgxFileDropModule
    
  ],
  providers: [AuthService, FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
