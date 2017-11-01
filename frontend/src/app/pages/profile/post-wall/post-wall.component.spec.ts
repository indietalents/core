/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PostWallComponent } from './post-wall.component';

describe('PostWallComponent', () => {
  let component: PostWallComponent;
  let fixture: ComponentFixture<PostWallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostWallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
