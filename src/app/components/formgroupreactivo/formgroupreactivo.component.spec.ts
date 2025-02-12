import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormgroupreactivoComponent } from './formgroupreactivo.component';

describe('FormgroupreactivoComponent', () => {
  let component: FormgroupreactivoComponent;
  let fixture: ComponentFixture<FormgroupreactivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormgroupreactivoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormgroupreactivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
