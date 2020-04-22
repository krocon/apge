import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { __capitalizedCp__WelcomeComponent } from "./__cp__-welcome.component";

describe('__capitalizedCp__WelcomeComponent', () => {
  let component: __capitalizedCp__WelcomeComponent;
  let fixture: ComponentFixture<__capitalizedCp__WelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [__capitalizedCp__WelcomeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(__capitalizedCp__WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
