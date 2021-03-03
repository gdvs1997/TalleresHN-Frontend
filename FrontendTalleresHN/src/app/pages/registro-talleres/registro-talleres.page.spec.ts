import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistroTalleresPage } from './registro-talleres.page';

describe('RegistroTalleresPage', () => {
  let component: RegistroTalleresPage;
  let fixture: ComponentFixture<RegistroTalleresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroTalleresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroTalleresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
