import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProductsDeleteComponent } from './modal-products-delete.component';

describe('ModalProductsDeleteComponent', () => {
  let component: ModalProductsDeleteComponent;
  let fixture: ComponentFixture<ModalProductsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalProductsDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalProductsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
