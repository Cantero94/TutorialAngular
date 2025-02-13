import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariocheckboxComponent } from './formulariocheckbox.component';

describe('FormulariocheckboxComponent', () => {
  let component: FormulariocheckboxComponent;
  let fixture: ComponentFixture<FormulariocheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulariocheckboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulariocheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
