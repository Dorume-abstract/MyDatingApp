import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemderDetailComponent } from './memder-detail.component';

describe('MemderDetailComponent', () => {
  let component: MemderDetailComponent;
  let fixture: ComponentFixture<MemderDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemderDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
