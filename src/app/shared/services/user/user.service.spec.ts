import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import user from 'src/../fixtures/user.json';
import { UserService } from './user.service';

describe('UserService', (): void => {
  let httpTestingController: HttpTestingController;
  let service: UserService;
  const USERCODE = '3610682';

  beforeEach((): void => {
    TestBed.configureTestingModule({
      providers: [UserService],
      imports: [HttpClientTestingModule],
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(UserService);
  });

  afterEach((): void => {
    httpTestingController.verify();
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });

  it('should load the user data', (): void => {
    service.getUser(USERCODE).subscribe((userData): void => {
      expect(userData.name).toEqual(user.name);
    });

    const req = httpTestingController.expectOne(
      `http://localhost:8081/user/${USERCODE}`
    );
    req.flush(user);
  });
});
