import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestionarCitaPage } from './gestionar-cita.page';

describe('GestionarCitaPage', () => {
  let component: GestionarCitaPage;
  let fixture: ComponentFixture<GestionarCitaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionarCitaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionarCitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
