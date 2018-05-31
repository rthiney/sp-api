import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
import { AnswerService } from './api/answer.service';
import { AnswerSuggestedService } from './api/answerSuggested.service';
import { AnswersBoxService } from './api/answersBox.service';
import { ArticleService } from './api/article.service';
import { AttachmentService } from './api/attachment.service';
import { CardService } from './api/card.service';
import { CategoryService } from './api/category.service';
import { ClusterService } from './api/cluster.service';
import { ClusterCardService } from './api/clusterCard.service';
import { ContactMessageService } from './api/contactMessage.service';
import { CountryService } from './api/country.service';
import { CptService } from './api/cpt.service';
import { DiagnosisCodeService } from './api/diagnosisCode.service';
import { DoctorDataService } from './api/doctorData.service';
import { DoctorHospitalService } from './api/doctorHospital.service';
import { DoctorMessageService } from './api/doctorMessage.service';
import { DoctorVendorService } from './api/doctorVendor.service';
import { DoctorhospitalviewService } from './api/doctorhospitalview.service';
import { DoctorvendorviewService } from './api/doctorvendorview.service';
import { EventsService } from './api/events.service';
import { EventsviewService } from './api/eventsview.service';
import { ExclusionerService } from './api/exclusioner.service';
import { FosUserService } from './api/fosUser.service';
import { GloveSizeService } from './api/gloveSize.service';
import { GloveTypeService } from './api/gloveType.service';
import { GownSizeService } from './api/gownSize.service';
import { GroupService } from './api/group.service';
import { HandednessService } from './api/handedness.service';
import { HospitalDataService } from './api/hospitalData.service';
import { MessagesviewService } from './api/messagesview.service';
import { PracticeService } from './api/practice.service';
import { PracticeHospitalService } from './api/practiceHospital.service';
import { PreferencecardviewService } from './api/preferencecardview.service';
import { QuestionService } from './api/question.service';
import { QuestionTypeService } from './api/questionType.service';
import { ResidentService } from './api/resident.service';
import { SpecialtyService } from './api/specialty.service';
import { StateService } from './api/state.service';
import { SurgeriesviewService } from './api/surgeriesview.service';
import { SurgeriesviewcodesService } from './api/surgeriesviewcodes.service';
import { SurgeryApiService } from './api/surgery.service';
import { SurgeryCptService } from './api/surgeryCpt.service';
import { SurgeryDiagnosisCodeService } from './api/surgeryDiagnosisCode.service';
import { SurgeryStatusService } from './api/surgeryStatus.service';
import { SystemLogService } from './api/systemLog.service';
import { SystemVariableService } from './api/systemVariable.service';
import { UserUserService } from './api/userUser.service';
import { VendorDataService } from './api/vendorData.service';
import { VendordataUserService } from './api/vendordataUser.service';
import { YearsInPracticeService } from './api/yearsInPractice.service';
import { Configuration } from './configuration';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [],
  exports: [],
  providers: [
    AnswerService,
    AnswerSuggestedService,
    AnswersBoxService,
    ArticleService,
    AttachmentService,
    CardService,
    CategoryService,
    ClusterService,
    ClusterCardService,
    ContactMessageService,
    CountryService,
    CptService,
    DiagnosisCodeService,
    DoctorDataService,
    DoctorHospitalService,
    DoctorMessageService,
    DoctorVendorService,
    DoctorhospitalviewService,
    DoctorvendorviewService,
    EventsService,
    EventsviewService,
    ExclusionerService,
    FosUserService,
    GloveSizeService,
    GloveTypeService,
    GownSizeService,
    GroupService,
    HandednessService,
    HospitalDataService,
    MessagesviewService,
    PracticeService,
    PracticeHospitalService,
    PreferencecardviewService,
    QuestionService,
    QuestionTypeService,
    ResidentService,
    SpecialtyService,
    StateService,
    SurgeriesviewService,
    SurgeriesviewcodesService,
    SurgeryApiService,
    SurgeryCptService,
    SurgeryDiagnosisCodeService,
    SurgeryStatusService,
    SystemLogService,
    SystemVariableService,
    UserUserService,
    VendorDataService,
    VendordataUserService,
    YearsInPracticeService
  ]
})
export class ApiModule {
  public static forRoot(
    configurationFactory: () => Configuration
  ): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [{ provide: Configuration, useFactory: configurationFactory }]
    };
  }

  constructor(
    @Optional()
    @SkipSelf()
    parentModule: ApiModule
  ) {
    if (parentModule) {
      throw new Error(
        'ApiModule is already loaded. Import your base AppModule only.'
      );
    }
  }
}
