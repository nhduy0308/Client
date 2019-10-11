import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestPicturesComponent } from './latest-pictures.component';

describe('LatestPicturesComponent', () => {
  let component: LatestPicturesComponent;
  let fixture: ComponentFixture<LatestPicturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestPicturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
