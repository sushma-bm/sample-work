/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TwoWheelerComponent } from './two-wheeler.component';

describe('TwoWheelerComponent', () => {
  let component: TwoWheelerComponent;
  let fixture: ComponentFixture<TwoWheelerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoWheelerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWheelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
