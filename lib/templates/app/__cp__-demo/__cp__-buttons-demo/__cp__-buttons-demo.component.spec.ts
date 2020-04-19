import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { __capitalizedCp__ButtonsDemoComponent } from './__cp__-buttons-demo.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { __capitalizedCp__ButtonsDemoModule } from './__cp__-buttons-demo.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('__capitalizedCp__ButtonsDemoComponent', () => {
  let component: __capitalizedCp__ButtonsDemoComponent;
  let fixture: ComponentFixture<__capitalizedCp__ButtonsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        __capitalizedCp__ButtonsDemoModule,
        NoopAnimationsModule,
        RouterTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(__capitalizedCp__ButtonsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
