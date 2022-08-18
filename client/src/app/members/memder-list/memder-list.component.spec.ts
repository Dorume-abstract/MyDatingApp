import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemderListComponent } from './memder-list.component';

describe('MemderListComponent', () => {
  let component: MemderListComponent;
  let fixture: ComponentFixture<MemderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemderListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
