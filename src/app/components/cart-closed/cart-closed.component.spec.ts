import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartClosedComponent } from './cart-closed.component';

describe('CartClosedComponent', () => {
  let component: CartClosedComponent;
  let fixture: ComponentFixture<CartClosedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartClosedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartClosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
