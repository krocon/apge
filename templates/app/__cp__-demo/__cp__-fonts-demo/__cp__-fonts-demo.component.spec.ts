import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { __capitalizedCp__FontsDemoComponent } from './__cp__-fonts-demo.component';
import { __capitalizedCp__FontsDemoModule } from './__cp__-fonts-demo.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('__capitalizedCp__FontsDemoComponent', () => {
  let component: __capitalizedCp__FontsDemoComponent;
  let fixture: ComponentFixture<__capitalizedCp__FontsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        __capitalizedCp__FontsDemoModule,
        NoopAnimationsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(__capitalizedCp__FontsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
