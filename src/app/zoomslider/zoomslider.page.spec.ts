import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomsliderPage } from './zoomslider.page';

describe('ZoomsliderPage', () => {
  let component: ZoomsliderPage;
  let fixture: ComponentFixture<ZoomsliderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoomsliderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomsliderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
