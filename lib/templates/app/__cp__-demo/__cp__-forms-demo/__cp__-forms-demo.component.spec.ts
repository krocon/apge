import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { __capitalizedCp__FormsDemoComponent } from './__cp__-forms-demo.component';
import { __capitalizedCp__FormsDemoModule } from './__cp__-forms-demo.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('__capitalizedCp__FormsDemoComponent', () => {
  let component: __capitalizedCp__FormsDemoComponent;
  let fixture: ComponentFixture<__capitalizedCp__FormsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        __capitalizedCp__FormsDemoModule,
        NoopAnimationsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(__capitalizedCp__FormsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
