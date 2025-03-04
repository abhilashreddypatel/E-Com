import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatogeryproductsComponent } from './catogeryproducts.component';

describe('CatogeryproductsComponent', () => {
  let component: CatogeryproductsComponent;
  let fixture: ComponentFixture<CatogeryproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatogeryproductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatogeryproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
