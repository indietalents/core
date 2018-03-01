/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SuperPostComponent } from './super-post.component';

describe('SuperPostComponent', () => {
  let component: SuperPostComponent;
  let fixture: ComponentFixture<SuperPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
