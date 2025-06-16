import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagascandidaturasComponent } from './vagascandidaturas.component';

describe('VagascandidaturasComponent', () => {
  let component: VagascandidaturasComponent;
  let fixture: ComponentFixture<VagascandidaturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VagascandidaturasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VagascandidaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
