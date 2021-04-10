import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProductsAddComponent } from './modal-products-add.component';

describe('ModalProductsAddComponent', () => {
  let component: ModalProductsAddComponent;
  let fixture: ComponentFixture<ModalProductsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalProductsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalProductsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
