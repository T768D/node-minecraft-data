type varint = number;
type varlong = bigint;
type optvarint = varint;
type pstring = string;
type buffer = Buffer;
type u8 = number;
type u16 = number;
type u32 = number;
type u64 = bigint;
type i8 = number;
type i16 = number;
type i32 = number;
type i64 = bigint;
type bool = boolean;
type f32 = number;
type f64 = number;
type UUID = string;
type option = unknown;
type entityMetadataLoop = unknown[];
type topBitSetTerminatedArray = unknown[];
type bitfield = number;
type bitflags = number;
type container = Record<string, unknown>;
type array = unknown[];
type restBuffer = Buffer;
type anonymousNbt = unknown;
type anonOptionalNbt = unknown | null;
type registryEntryHolder = unknown;
type registryEntryHolderSet = unknown[];
type lpVec3 = { x: number; y: number; z: number };
interface vec2f {
    x: f32;
    y: f32;
}

interface vec3f {
    x: f32;
    y: f32;
    z: f32;
}

interface vec4f {
    x: f32;
    y: f32;
    z: f32;
    w: f32;
}

interface vec3f64 {
    x: f64;
    y: f64;
    z: f64;
}

interface vec3i {
    x: varint;
    y: varint;
    z: varint;
}

interface vec3i32 {
    x: i32;
    y: i32;
    z: i32;
}

type ContainerID = varint;
interface SlotComponent {
    type: SlotComponentType;
}

interface ItemSoundEvent {
    soundName: string;
}

interface ItemFireworkExplosion {
    shape: ItemFireworkExplosion_shape;
    hasTrail: bool;
    hasTwinkle: bool;
}

interface ItemEffectDetail {
    amplifier: varint;
    duration: varint;
    ambient: bool;
    showParticles: bool;
    showIcon: bool;
}

interface ItemPotionEffect {
    id: varint;
    details: ItemEffectDetail;
}

interface ItemBlockProperty {
    name: string;
    isExactMatch: bool;
}

interface DataComponentMatchers {
    exactMatchers: ExactComponentMatcher;
}

interface ItemBlockPredicate {
    nbt: anonOptionalNbt;
    components: DataComponentMatchers;
}

interface ItemBookPage {
    content: string;
}

interface ItemWrittenBookPage {
    content: anonymousNbt;
    filteredContent: anonOptionalNbt;
}

interface ItemConsumeEffect {
    type: ItemConsumeEffect_type;
}

interface ArmorTrimMaterial {
    assetBase: string;
    description: anonymousNbt;
}

interface ArmorTrimPattern {
    assetId: string;
    description: anonymousNbt;
    decal: bool;
}

interface InstrumentData {
    soundEvent: ItemSoundHolder;
    useDuration: f32;
    range: f32;
    description: anonymousNbt;
}

interface JukeboxSongData {
    soundEvent: ItemSoundHolder;
    description: anonymousNbt;
    lengthInSeconds: f32;
    comparatorOutput: varint;
}

interface BannerPattern {
    assetId: string;
    translationKey: string;
}

interface BannerPatternLayer {
    colorId: varint;
}

interface DamageTypeData {
    msgId: string;
    scaling: DamageTypeData_scaling;
    exhaustion: f32;
    effects: DamageTypeData_effects;
    deathMessageType: DamageTypeData_deathMessageType;
}

interface KineticWeaponCondition {
    maxDurationTicks: varint;
    minSpeed: f32;
    minRelativeSpeed: f32;
}

interface UntrustedSlotComponent {
    type: SlotComponentType;
    data: ByteArray;
}

interface UntrustedSlot {
    itemCount: varint;
}

interface Slot {
    itemCount: varint;
}

interface HashedSlot {
    itemId: varint;
    itemCount: varint;
}

interface RespawnData {
    globalPos: GlobalPos;
    yaw: f32;
    pitch: f32;
}

interface GlobalPos {
    dimensionName: string;
    location: position;
}

interface DebugStructureInfo {
    boundingBoxMin: position;
    boundingBoxMax: position;
}

interface Node {
    position: vec3i32;
    walkedDistance: f32;
    costMalus: f32;
    closed: bool;
    type: Node_type;
    f: f32;
}

interface PathDebugData {
}

interface Path {
    reached: bool;
    nextNodeIndex: i32;
    target: position;
    debugData: PathDebugData;
}

interface DebugSubscriptionUpdate {
    type: DebugSubscriptionDataType;
}

interface DebugSubscriptionEvent {
    type: DebugSubscriptionDataType;
}

interface Particle {
    type: Particle_type;
}

interface packedChunkPos {
    z: i32;
    x: i32;
}

interface entityMetadataEntry {
    key: u8;
    type: entityMetadataEntry_type;
}

interface EntityMetadataPaintingVariant {
    width: i32;
    height: i32;
    assetId: string;
}

interface chunkBlockEntity {
    y: i16;
    type: varint;
    nbtData: anonOptionalNbt;
}

interface game_profile_name_prop {
    name: string;
}

interface GameProfile {
    uuid: UUID;
    name: string;
}

interface PartialResolvableProfile {
}

interface GameProfileProperty {
    name: string;
    value: string;
}

interface ResolvableProfile {
    type: ResolvableProfile_type;
    skinPatch: PlayerSkinPatch;
}

interface PlayerSkinPatch {
}

interface command_node {
}

interface packet_common_settings {
    locale: string;
    viewDistance: i8;
    chatFlags: varint;
    chatColors: bool;
    skinParts: u8;
    mainHand: varint;
    enableTextFiltering: bool;
    enableServerListing: bool;
    particleStatus: packet_common_settings_particleStatus;
}

interface packet_common_cookie_request {
    cookie: string;
}

interface packet_common_store_cookie {
    key: string;
    value: ByteArray;
}

interface packet_common_transfer {
    host: string;
    port: varint;
}

interface packet_common_cookie_response {
    key: string;
}

interface packet_common_select_known_packs {
}

interface packet_common_custom_report_details {
}

interface packet_common_remove_resource_pack {
}

interface packet_common_add_resource_pack {
    uuid: UUID;
    url: string;
    hash: string;
    forced: bool;
}

interface packet_common_server_links {
}

interface packet_common_clear_dialog {
}

interface packet_common_custom_click_action {
    id: string;
}

