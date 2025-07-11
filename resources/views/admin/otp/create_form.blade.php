<div class="justify-content-center">
  <div class="rounded-full"></div>
    <div class="card">
      <div class="card-header text-center text-2xl font-semibold tracking-wide">{{ __('Verify OTP') }}</div>
      <div class="card-body">
        @if(\Config::get('settings.login_status')==0)
        <div class="alert-box success">
          Login page under maintenance
        </div>
        @else
        <form method="POST" action="{{ url('/verifyotp') }}" aria-label="{{ __('Verify OTP') }}">
          @csrf
          <div class="lg:px-5 md:px-5">
            <div class="form-group my-8">
              <!-- <label for="email" class="col-sm-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label> -->
              <div class="relative">
                <div class="input-group flex  w-full border-b border-gray-400">
                  <span class="input-group-addon w-6 flex items-center justify-center" style="color: #aaa;">
                    <svg class="fill-current w-4 h-4" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g>
                      <path d="M469.333,64H42.667C19.135,64,0,83.135,0,106.667v298.667C0,428.865,19.135,448,42.667,448h426.667 C492.865,448,512,428.865,512,405.333V106.667C512,83.135,492.865,64,469.333,64z M42.667,85.333h426.667 c1.572,0,2.957,0.573,4.432,0.897c-36.939,33.807-159.423,145.859-202.286,184.478c-3.354,3.021-8.76,6.625-15.479,6.625 s-12.125-3.604-15.49-6.635C197.652,232.085,75.161,120.027,38.228,86.232C39.706,85.908,41.094,85.333,42.667,85.333z M21.333,405.333V106.667c0-2.09,0.63-3.986,1.194-5.896c28.272,25.876,113.736,104.06,169.152,154.453 C136.443,302.671,50.957,383.719,22.46,410.893C21.957,409.079,21.333,407.305,21.333,405.333z M469.333,426.667H42.667 c-1.704,0-3.219-0.594-4.81-0.974c29.447-28.072,115.477-109.586,169.742-156.009c7.074,6.417,13.536,12.268,18.63,16.858 c8.792,7.938,19.083,12.125,29.771,12.125s20.979-4.188,29.76-12.115c5.096-4.592,11.563-10.448,18.641-16.868 c54.268,46.418,140.286,127.926,169.742,156.009C472.552,426.073,471.039,426.667,469.333,426.667z M490.667,405.333 c0,1.971-0.624,3.746-1.126,5.56c-28.508-27.188-113.984-108.227-169.219-155.668c55.418-50.393,140.869-128.57,169.151-154.456 c0.564,1.91,1.194,3.807,1.194,5.897V405.333z"/>
                    </g></g></svg>
                  </span>
                  <input id="otp" type="otp" class="form-control{{ $errors->has('otp') ? ' is-invalid' : '' }} px-2 py-2 w-full text-sm focus:outline-none inputAnimation" placeholder="" name="otp"  required>
                  <label for="otp" class="control-label text-sm">OTP</label>
                </div>
              </div>
              @if ($errors->has('otp'))
              <span class="invalid-feedback text-red-500 text-xs font-semibold" role="alert">
                {{ $errors->first('otp') }}
              </span>
              @endif
            </div>
            <div class="form-group  py-8 flex justify-between">
              <div class="w-full z-40">
                <button type="submit" class="btn bg-red-600 text-white uppercase px-8 py-1 tracking-wider w-full z-40">
                {{ __('Verify') }}
                </button>
              </div>
            </div>
          </div>
        </form>
        @endif
      </div>
    </div>
  </div>