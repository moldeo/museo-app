/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Per1Component } from './per-1.component';

describe('Per1Component', () => {
  let component: Per1Component;
  let fixture: ComponentFixture<Per1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Per1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Per1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
