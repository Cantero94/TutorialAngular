import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragAndDropAMaterialsComponent } from './drag-and-drop-amaterials.component';

describe('DragAndDropAMaterialsComponent', () => {
  let component: DragAndDropAMaterialsComponent;
  let fixture: ComponentFixture<DragAndDropAMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragAndDropAMaterialsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragAndDropAMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
