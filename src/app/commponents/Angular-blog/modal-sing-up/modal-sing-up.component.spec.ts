import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSingUpComponent } from './modal-sing-up.component';

describe('ModalSingUpComponent', () => {
  let component: ModalSingUpComponent;
  let fixture: ComponentFixture<ModalSingUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSingUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSingUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
