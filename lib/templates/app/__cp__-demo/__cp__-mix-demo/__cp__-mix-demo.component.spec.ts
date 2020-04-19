import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { __capitalizedCp__MixDemoComponent } from './__cp__-mix-demo.component';
import { __capitalizedCp__MixDemoModule } from './__cp__-mix-demo.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('__capitalizedCp__MixDemoComponent', () => {
  let component: __capitalizedCp__MixDemoComponent;
  let fixture: ComponentFixture<__capitalizedCp__MixDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        __capitalizedCp__MixDemoModule,
        NoopAnimationsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(__capitalizedCp__MixDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
