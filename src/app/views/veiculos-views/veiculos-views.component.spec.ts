import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculosViewsComponent } from './veiculos-views.component';

describe('VeiculosViewsComponent', () => {
  let component: VeiculosViewsComponent;
  let fixture: ComponentFixture<VeiculosViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VeiculosViewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VeiculosViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
