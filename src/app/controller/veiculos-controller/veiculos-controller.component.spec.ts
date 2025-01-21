import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculosControllerComponent } from './veiculos-controller.component';

describe('VeiculosControllerComponent', () => {
  let component: VeiculosControllerComponent;
  let fixture: ComponentFixture<VeiculosControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VeiculosControllerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VeiculosControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
