import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { __capitalizedCp__SettingsComponent } from './__cp__-settings.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('DbSettingsPage', () => {
  let component: __capitalizedCp__SettingsComponent;
  let fixture: ComponentFixture<__capitalizedCp__SettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [__capitalizedCp__SettingsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],

      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(__capitalizedCp__SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
