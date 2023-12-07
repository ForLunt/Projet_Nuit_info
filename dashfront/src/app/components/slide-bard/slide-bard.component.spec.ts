import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideBardComponent } from './slide-bard.component';

describe('SlideBardComponent', () => {
  let component: SlideBardComponent;
  let fixture: ComponentFixture<SlideBardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideBardComponent]
    });
    fixture = TestBed.createComponent(SlideBardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
