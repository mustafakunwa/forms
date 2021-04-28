import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from "@angular/platform-browser";
import { LoaderComponent } from './loader.component';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Component', () => {
    expect(component).toBeTruthy();
  });

  it('should not create Loader',()=>{
    let spanEl=fixture.debugElement.query(By.css('span'))
    expect(spanEl).toBeFalsy()
  });

  it('should create Loader',()=>{
    component.show=true;
    fixture.detectChanges();
    let spanEl=fixture.debugElement.query(By.css('span'))
    expect(spanEl).toBeTruthy()
  })

});
