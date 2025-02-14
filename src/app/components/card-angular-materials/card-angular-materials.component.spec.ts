import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAngularMaterialsComponent } from './card-angular-materials.component';

describe('CardAngularMaterialsComponent', () => {
  let component: CardAngularMaterialsComponent;
  let fixture: ComponentFixture<CardAngularMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAngularMaterialsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAngularMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
