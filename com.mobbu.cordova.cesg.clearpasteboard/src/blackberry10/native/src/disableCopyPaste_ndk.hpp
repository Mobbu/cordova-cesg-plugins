/*
 * Copyright (c) 2013 Mobbu Limited
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
#ifndef DISABLECOPYPASTENDK_HPP_
#define DISABLECOPYPASTENDK_HPP_

#include <pthread.h>
#include <clipboard/clipboard.h>

class TemplateJS;

namespace webworks {

	class DisableCopyPasteNDK {
	public:
		explicit DisableCopyPasteNDK(TemplateJS *parent = NULL);
		virtual ~DisableCopyPasteNDK();
		void clearClipboard();
	};

}
#endif
