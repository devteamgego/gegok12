<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class StudentAttendancePushEvent {
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $data;
    /**
    * Create a new event instance.
    *
    * @return void
    */

    public function __construct( $data ) {
        //dump( $data );
        $this->data = $data;
    }

    /**
    * Get the channels the event should broadcast on.
    *
    * @return \Illuminate\Broadcasting\Channel|array
    */

    public function broadcastOn() {
        //return new PrivateChannel( 'channel-name' );
        return [];
    }

    public function broadcastWith() {
        return [];
    }

}
