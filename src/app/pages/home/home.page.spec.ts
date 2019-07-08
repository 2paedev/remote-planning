import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePage } from './home.page';

describe('HomePage', (): void => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async((): void => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
    }).compileComponents();
  }));

  beforeEach((): void => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
