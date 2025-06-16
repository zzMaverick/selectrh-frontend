import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatarvagaComponent } from './candidatarvaga.component';

describe('CandidatarvagaComponent', () => {
  let component: CandidatarvagaComponent;
  let fixture: ComponentFixture<CandidatarvagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidatarvagaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatarvagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
