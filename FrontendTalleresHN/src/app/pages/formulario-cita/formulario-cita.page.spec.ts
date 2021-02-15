import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormularioCitaPage } from './formulario-cita.page';

describe('FormularioCitaPage', () => {
  let component: FormularioCitaPage;
  let fixture: ComponentFixture<FormularioCitaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioCitaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioCitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
