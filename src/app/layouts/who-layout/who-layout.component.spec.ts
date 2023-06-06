import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoLayoutComponent } from './who-layout.component';

describe('WhoLayoutComponent', () => {
  let component: WhoLayoutComponent;
  let fixture: ComponentFixture<WhoLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhoLayoutComponent]
    });
    fixture = TestBed.createComponent(WhoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
