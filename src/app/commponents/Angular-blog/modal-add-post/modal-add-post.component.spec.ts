import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddPostComponent } from './modal-add-post.component';

describe('ModalAddPostComponent', () => {
  let component: ModalAddPostComponent;
  let fixture: ComponentFixture<ModalAddPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
