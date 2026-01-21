import { AnchorIcon } from "./Anchor";
import { ArrowLeftIcon } from "./ArrowLeft";
import { ArrowRightIcon } from "./ArrowRight";
import { ChallengeIcon } from "./Challenge";
import { ChevronIcon } from "./Chevron";
import { ChevronLeftIcon } from "./ChevronLeft";
import { ChevronRightIcon } from "./ChevronRight";
import { ClaimIcon } from "./Claim";
import { ClaimedIcon } from "./Claimed";
import { CodeIcon } from "./Code";
import { CopyIcon } from "./Copy";
import { CloseIcon } from "./Close";
import { DiscordIcon } from "./Discord";
import { DoubleArrowIcon } from "./DoubleArrow";
import { ExternalIcon } from "./External";
import { FilterIcon } from "./Filter";
import { FlagIcon } from "./Flag";
import { FlameIcon } from "./Flame";
import { FlexibleIcon } from "./Flexible";
import { FreeIcon } from "./Free";
import { GithubIcon } from "./Github";
import { GridViewIcon } from "./GridView";
import { HeartIcon } from "./Heart";
import { LanguageIcon } from "./Language";
import { LessonsIcon } from "./Lessons";
import { LinkIcon } from "./Link";
import { ListViewIcon } from "./ListView";
import { LockedIcon } from "./Locked";
import { MentorIcon } from "./Mentor";
import { ModularIcon } from "./Modular";
import { NFTIcon } from "./NFT";
import { OnlineIcon } from "./Online";
import { OpenIcon } from "./Open";
import { ProgressIcon } from "./Progress";
import { RewardsIcon } from "./Rewards";
import { RustIcon } from "./Rust";
import { SearchIcon } from "./Search";
import { ShiftArrowIcon } from "./ShiftArrow";
import { SuccessIcon } from "./Success";
import { SuccessCircleIcon } from "./SuccessCircle";
import { TableIcon } from "./Table";
import { TargetIcon } from "./Target";
import { TypescriptIcon } from "./Typescript";
import { UnclaimedIcon } from "./Unclaimed";
import { UploadIcon } from "./Upload";
import { WalletIcon } from "./Wallet";
import { WarningIcon } from "./Warning";
import { XIcon } from "./X";

export const IconComponents = {
  Anchor: AnchorIcon,
  ArrowLeft: ArrowLeftIcon,
  ArrowRight: ArrowRightIcon,
  Challenge: ChallengeIcon,
  Chevron: ChevronIcon,
  ChevronLeft: ChevronLeftIcon,
  ChevronRight: ChevronRightIcon,
  Claim: ClaimIcon,
  Claimed: ClaimedIcon,
  Close: CloseIcon,
  Code: CodeIcon,
  Copy: CopyIcon,
  Discord: DiscordIcon,
  DoubleArrow: DoubleArrowIcon,
  External: ExternalIcon,
  Filter: FilterIcon,
  Flag: FlagIcon,
  Flame: FlameIcon,
  Flexible: FlexibleIcon,
  Github: GithubIcon,
  GridView: GridViewIcon,
  Free: FreeIcon,
  Mentor: MentorIcon,
  Heart: HeartIcon,
  Language: LanguageIcon,
  Lessons: LessonsIcon,
  Link: LinkIcon,
  ListView: ListViewIcon,
  Locked: LockedIcon,
  Modular: ModularIcon,
  NFT: NFTIcon,
  Online: OnlineIcon,
  Open: OpenIcon,
  Progress: ProgressIcon,
  Rewards: RewardsIcon,
  Rust: RustIcon,
  Search: SearchIcon,
  ShiftArrow: ShiftArrowIcon,
  Success: SuccessIcon,
  SuccessCircle: SuccessCircleIcon,
  Table: TableIcon,
  Target: TargetIcon,
  Typescript: TypescriptIcon,
  Unlocked: UnclaimedIcon,
  Upload: UploadIcon,
  Wallet: WalletIcon,
  Warning: WarningIcon,
  X: XIcon,
} as const;

export type IconName = keyof typeof IconComponents;
