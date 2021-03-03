import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeleccionarTipoUsuarioPage } from './seleccionar-tipo-usuario.page';

describe('SeleccionarTipoUsuarioPage', () => {
  let component: SeleccionarTipoUsuarioPage;
  let fixture: ComponentFixture<SeleccionarTipoUsuarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionarTipoUsuarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeleccionarTipoUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
