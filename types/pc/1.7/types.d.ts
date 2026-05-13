type varint = number;
type pstring = string;
type u16 = number;
type u8 = number;
type i64 = bigint;
type buffer = Buffer;
type i32 = number;
type i8 = number;
type bool = boolean;
type i16 = number;
type f32 = number;
type f64 = number;
type UUID = string;
type option = unknown;
type entityMetadataLoop = unknown[];
type bitfield = number;
type bitflags = number;
type container = Record<string, unknown>;
type array = unknown[];
type restBuffer = Buffer;
// Unhandled type when generating typescript declaration file. This type will default to unknown for type saftey
type nbt = unknown;// Unhandled type when generating typescript declaration file. This type will default to unknown for type saftey
type compressedNbt = unknown;type ByteArray = Buffer;


interface vec3i16 {
    x: i16;
    y: i16;
    z: i16;
}

interface slot {
    blockId: i16;
}

interface position_iii {
    x: i32;
    y: i32;
    z: i32;
}

interface position_isi {
    x: i32;
    y: i16;
    z: i32;
}

interface position_ibi {
    x: i32;
    y: u8;
    z: i32;
}

type entityMetadataItem = i8 | i16 | i32 | f32 | string | slot  | 
{
    x: i32;
    y: i32;
    z: i32;
} | 
{
    pitch: f32;
    yaw: f32;
    roll: f32;
};


// Unimplemented value
type entityMetadata = unknown;